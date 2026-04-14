/**
 * React shim for @sanity/vision compatibility.
 *
 * @sanity/vision imports `useEffectEvent` from 'react', but Next.js bundles
 * its own React canary that doesn't export it publicly. This shim proxies
 * the same Next.js bundled React (no dual instances) and adds the missing export.
 */
const path = require('path')

// Use the exact same React instance that Next.js uses internally
const ReactModule = require(path.resolve(__dirname, '../node_modules/next/dist/compiled/react/index.js'))

const useEffectEvent =
  ReactModule.useEffectEvent !== undefined
    ? ReactModule.useEffectEvent
    : function useEffectEvent(fn) {
        const ref = ReactModule.useRef(fn)
        ReactModule.useInsertionEffect(() => {
          ref.current = fn
        })
        return ReactModule.useCallback(function () {
          return ref.current.apply(this, arguments)
        }, [])
      }

module.exports = Object.assign({}, ReactModule, { useEffectEvent })
