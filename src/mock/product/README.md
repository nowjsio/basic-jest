1. es6 환경에서 jest 를 환경하기 위해서는 transcompile을 해야한다.
    - install @babel/plugin-transform-modules-commonjs
2. test 환경에서만 플러그인을 사용하기 위해서 root/.babelrc 파일 생성 후 내용 추가한다
{
    "env": {
        "test": {
            "plugins": [
                "@babel/plugin-transform-modules-commonjs"
            ]
        }
    }
}