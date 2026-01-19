1) Header
    1) Logo
    2) Nav Items
2) Body
    1) Search Bar
    2) Restaurant Container
    3) Restaurant Card
3) Footer
    1) Copyright
    2) Links
    3) Address
    4) Contact

# Two types of Export/Import
  # Default Export/Import
      export default Component
      import Component from "File_path"
  # Named Export/Import
      export const Component
      import {Component} from "File_path"


# React Hoocks
    Normal JS utility function
    - useState()-----> super powerful state variable-----It is used to create State variable------it maintains the state of   your Component
    - useEffect()------>
        it takes two arguments
            1) CallBack function
            2) Dependencies Array
        useEffect( ()=>{},
                   []
                 )