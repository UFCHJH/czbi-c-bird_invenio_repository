from invenio_assets.webpack import WebpackThemeBundle

theme = WebpackThemeBundle(
    __name__,
    ".",
    default="semantic-ui",
    themes={
        "semantic-ui": dict(
            entry={
                "datasets_search": "./js/datasets/search/index.js",
                "datasets_deposit_form": "./js/datasets/forms/index.js",
                "datasets_record_detail": "./js/datasets/details/index.js"
            },
            dependencies={
                "@thekarinka/czbi-ui_lib": "0.1.4"
            },
            devDependencies={},
            aliases={
                "@oarepo/ui-theme": "./js/oarepo_ui/forms/index.js",
                "@js/datasets": "./js/datasets"
            },
        )
    },
)
