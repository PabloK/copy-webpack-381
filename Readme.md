## Copy-Webpack-381 Usage example


### Current output (version: 5.0.3)
```text
└── dist
    ├── dir
    │   └── file.txt
    ├── symlink
    │   └── file.txt
    └── main.js
```
    
### Expected output with new parameter
```text
└── dist
    ├── dir
    │   └── file.txt
    ├── symlink -> ./dir
    └── main.js
```