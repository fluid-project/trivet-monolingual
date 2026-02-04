# Trivet Monolingual

_A simple starter kit for Eleventy-based static sites for the Fluid Project._

This repository contains the files needed to build [Eleventy](http://11ty.dev/)-based static sites for the [Fluid Project](https://fluidproject.org).
It does not include support for internationalization; if your project requires internationalization, use [Trivet](https://github.com/fluid-project/trivet/)
instead.

## Installation

You can use GitHub's template repository feature to create your own project based on Trivet Monolingual. From the
[repository homepage](https://github.com/fluid-project/trivet-monolingual),
click the "Use this template" button and then choose "Create a new repository".

You can also set up a new project locally using [degit](https://www.npmjs.com/package/degit):

```bash
pnpm dlx degit fluid-project/trivet-monolingual YOUR-PROJECT-NAME
```

## Usage

### To run locally in development mode

1. Install the required NPM packages: `pnpm install`
2. Run [Eleventy](http://11ty.dev) in development mode: `pnpm start`.

The website will be available at [http://localhost:8080](http://localhost:8080).

### To build and serve using Docker

You can build and serve the website from a [Docker](https://docs.docker.com/get-docker) container.

Once you have Docker installed, run the following commands to build a Docker image and start a container:

- Build the image: `docker build -t trivet-monolingual .`
- Run the container: `docker run --name trivet-monolingual -p 8000:80 trivet-monolingual`

The website will be available at [http://localhost:8000](http://localhost:8000)

If you make changes to the website, repeat the steps to build the image and start a new container.

### To build for deployment to a personal web server

1. Install the required NPM packages: `pnpm install`
2. Run the build script: `pnpm build`
3. Upload the contents of the `./_site/` directory to the web root of your server.

If you make changes to the website, repeat step 2 to build the website and upload any changed files from the `./_site/`
directory to the web root of your server.

## Features

- Basic static site configuration for developing project websites and blogs.
- Starter configuration for [Sveltia CMS](https://sveltiacms.app/).
- Integrated [User Interface Options](https://docs.fluidproject.org/infusion/development/UserInterfaceOptionsAPI.html)
  Preferences Editor.

## Notes

Modifications can be made to any source file or directory except for the contents of the `_site` directory. The
`_site` directory is not versioned since it contains the built website that Eleventy generates from the source files,
and files in `_site` are overwritten at build time.

## Working with Sveltia CMS

The [Sveltia CMS](https://sveltiacms.app/) configuration can be edited in [`src/admin/config.yml`](src/admin/config.yml).
For full documentation, see the [Sveltia CMS documentation](https://sveltiacms.app/en/docs/intro).

## License

Trivet Monolingual is available under the [New BSD License](https://raw.githubusercontent.com/fluid-project/trivet-monolingual/master/LICENSE.md).

## Third Party Software in Trivet Monolingual

Trivet is based on other publicly available software, categorized by license:

### MIT License

- [Eleventastic](https://github.com/maxboeck/eleventastic)
- [eleventy-webpack](https://github.com/clenemt/eleventy-webpack)
- [Hylia](https://github.com/hankchizljaw/hylia)
- [Supermaya](https://github.com/MadeByMike/supermaya)
