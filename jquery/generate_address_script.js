function generate_address( username, hostname ) {
        var domain = ".com";
        var atsign = "&#64;";
        var addr = username + atsign + hostname + domain;
        document.write( 
          "<" + "a" + " " + "class=\"a_footer\"" + " " +"href=" + "mail" + "to:" + addr + ">"  );
      }