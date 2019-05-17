# Copy-Webpack-381 Usage example


## Current output (version: 5.0.3)
└── dist
    ├── dir
    │   └── file.txt
    ├── symlink
    │   └── file.txt
    └── main.js
    
# Expected output with new parameter
└── dist
    ├── dir
    │   └── file.txt
    ├── symlink -> ./dir
    └── main.js