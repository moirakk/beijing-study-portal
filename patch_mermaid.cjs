const fs = require('fs');
let code = fs.readFileSync('src/components/Mermaid.tsx', 'utf8');

code = code.replace(
  /const \[error, setError\] = useState\(false\)/,
  `const [error, setError] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])`
);

code = code.replace(
  /useEffect\(\(\) => {[\s\S]*?}, \[chart\]\)/,
  `useEffect(() => {
    if (!inView) return
    let cancelled = false
    loadMermaid()
      .then((mermaid) => mermaid.render(\`mmd-\${++idCounter}\`, chart))
      .then(({ svg }) => {
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg
        }
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
    return () => {
      cancelled = true
    }
  }, [chart, inView])`
);

fs.writeFileSync('src/components/Mermaid.tsx', code);
