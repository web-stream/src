[![License Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=true)](http://www.apache.org/licenses/LICENSE-2.0)
[![gitter](https://badges.gitter.im/Join%20Chat.svg)][gitter]

![logo.jloads.com](https://logo.jloads.com/6/cover.png)

# /jloads-src/src
this is old repositories with all modules inside, now are splitted:

## List of jloads modules

### CORE
+ [jloads.js](jloads.js)
+ https://github.com/jloads-src/core

### URL
+ https://github.com/jloads-src/url
+ [jloads-url.js](jloads-url.js)

### EVENT
+ https://github.com/jloads-src/event
+ [jloads-event.js](jloads-event.js)

### TARGET 
+ https://github.com/jloads-src/target 
+ [jloads-target.js](jloads-target.js)

### FILE
+ https://github.com/jloads-src/file
+ [jloads-file.js](jloads-file.js)

### FORM
+ https://github.com/jloads-src/form
+ [jloads-form.js](jloads-form.js)

### OBJ (JSON)
+ https://github.com/jloads-src/obj
+ [jloads-obj.js](jloads-obj.js)



# [Biblioteka jLoads](https://docs.jloads.com/README.md)

+ jLoads oferuje streamowanie interfejsu aplikacji w natywnym JS 

+ jLoads wspiera natywne rozwiązania, ułatwia pracę z kodem zastanym (legacy code)

+ jLoads został stworzony dla programistów szukających prostych rozwiązań, by ułatwić modularyzację aplikacji

+ jLoads wspiera proces refaktoryzacji, gdyż pozwala poprzez modularyzację ominięcie pułapek stojących za najnowszymi wersjami frameworków oraz troszczeniem się o ich aktualizacje.

+ Obecnie rozwiązanie jLoads dotyczy frontendu, ale trwają pracę nad wykorzystaniem NodeJS do wsparcia backendu.

## More ...
 + [All projects on github](https://github.com/jloads/)
 + [jLoads on github](https://github.com/jloads/get/)
 + [changelog.md](changelog.md)


## How to use? 



Load to Your project [download jloads.js](https://get.jloads.com/jloads.min.js)


       <script src="//get.jloads.com/jloads.min.js">
           // Jloads is loading any media and content dynamically
       </script>


Add dependences, example with jquery and bootstrap, asynchronus, without special tags, only jloads logic to controll JS loading


       <script>
           // load content ASAP with dependencies, that jquery must be first and after that bootstrap
           jl.file({
               "//code.jquery.com/jquery-3.5.1.min.js": [
                   "//stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
                   "//stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
               ]
           });
       </script>


