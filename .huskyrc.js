module.exports = {
    "hooks": {
        "pre-commit": "yarn test:changed && eslint"
    }
}
