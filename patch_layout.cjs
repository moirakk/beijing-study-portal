const fs = require('fs');
let code = fs.readFileSync('src/components/Layout.tsx', 'utf8');

code = code.replace(
  "import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'",
  "import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'\nimport { AnimatePresence, motion } from 'framer-motion'\nimport { Suspense } from 'react'\nimport PageSkeleton from './PageSkeleton'"
);

code = code.replace(
  /<main[\s\S]*?<Outlet \/>[\s\S]*?<\/main>/,
  `<AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="mx-auto w-full max-w-[980px] px-5 pb-24 pt-6"
        >
          <Suspense fallback={<PageSkeleton />}>
            <Outlet />
          </Suspense>
        </motion.main>
      </AnimatePresence>`
);

fs.writeFileSync('src/components/Layout.tsx', code);
