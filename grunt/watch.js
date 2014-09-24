module.exports = {
    options: {
        livereload: true
    },
    styles: {
        files: ['dev/_assets/scss/{,*/}*.scss'],
        tasks: ['sass:dev','autoprefixer:dev']
    },
    scripts: {
        files: ['dev/_assets/scripts/{,*/}*.js'],
        tasks: ['copy:scripts']
    },
    svg: {
        files: ['dev/_assets/svg/*.svg'],
        tasks: [
            'svgstore:dev',
            'jekyll:dev',
            'sass:dev',
            'autoprefixer:dev'
        ]
    },
    jekyll: {
        files: [
            'dev/*.{html,md}',
            'dev/_includes/*.{html,scss}',
            'dev/_layouts/*.html',
            'dev/patterns/*.html',
            'dev/templates/*.html',
            'dev/_plugins/*.rb'
        ],
        tasks: [
            'jekyll:dev',
            'sass:dev',
            'autoprefixer:dev',
        ]
    },
    configFiles: {
        files: ['gruntfile.js', 'grunt/*.{js,yaml}'],
        options: {
            reload: true
        }
    },
};
