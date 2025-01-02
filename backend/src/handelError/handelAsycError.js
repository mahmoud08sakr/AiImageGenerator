

export default function handelAsycError(fn) {
    return (req, res, next) => {
        fn(req, res, next).catch(err => next(err))
    }
}