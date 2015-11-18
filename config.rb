sass_dir         = "bootstrap_components"
http_path        = "/"
css_dir          = "bootstrap_compiled/css"
#css_dir          = "../../static/insight/bootstrap_compiled/css"
images_dir       = "/images"
relative_assets  = true
environment      = :development
output_style     = (environment == :production) ? :compact : :expanded
sass_options     = {:debug_info=>false}
line_comments    = true
preferred_syntax = :scss
