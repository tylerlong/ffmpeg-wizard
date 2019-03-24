# FFmpeg Wizard

FFmpeg Wizard is an easy to use GUI tool for [FFmpeg](https://ffmpeg.org/).

### [Download](https://github.com/tylerlong/ffmpeg-wizard/releases)


---

### Below is for maintainers and contributors

---


## Setup & Run

```
yarn install
yarn start
```


## Release

```
rm -rf dist
yarn build -p
GH_TOKEN=<GH_TOKEN> yarn release
```

`GH_TOKEN` is your [GitHub Personal access token](https://github.com/settings/tokens).


## Todo

- macOS application code signing
- Configuring yargs through package.json is deprecated and will be removed in the next major release, please use the JS API instead.
