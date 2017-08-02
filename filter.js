const filter = (arr, cb) => arr.reduce((p, c) => !cb(c) && p.push(c) && p || p, [])
