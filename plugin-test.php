
<?php
/** 
* Plugin Name: react test
* Description: test if I can includ react app to shortcode plugin
* Author: Naji Nabulsi
* Version: 0.1.0
*/
global $pluginUrl ;

add_shortcode('react_app', function()
{
    
    return '<div id="root" ></div>';
});  

/**
 * add script 
 * add style
 */
function plugin_react_test_script() 
{          
 
  /**
   * get the plugin url from the theme
   */
  $pluginUrl = plugins_url();
  wp_enqueue_style('pugin_react_test_css', $pluginUrl.'/plugin-test/build/static/css/main.e6c13ad2.css');
  ?>
    <script type="module" src="<?php echo $pluginUrl ?>/plugin-test/build/static/js/main.2330359b.js">
    </script>
  <?php
}

if(!function_exists('load_plugin_test'))
{
    function load_plugin_test()
    {
       if(shortcode_exists( 'react_app' )){        
        add_action( 'wp_enqueue_scripts', 'plugin_react_test_script' );
      }
    } 
    add_action('init','load_plugin_test');
}
