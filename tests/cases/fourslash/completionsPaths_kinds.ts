/// <reference path="fourslash.ts" />

// @Filename: /src/b.ts
////not read

// @Filename: /src/dir/x.ts
////not read

// @Filename: /src/a.ts
////import {} from "./[|/*0*/|]";
////import {} from "./[|/*1*/|]";

// @Filename: /tsconfig.json
////{
////    "compilerOptions": {
////        "baseUrl": ".",
////        "paths": {
////            "foo/*": ["src/*"]
////        }
////    }
////}

verify.completions({
    at: ["0", "1"],
    are: [{ name: "b", kind: "script" }, { name: "dir", kind: "directory" }],
    isNewIdentifierLocation: true
});
