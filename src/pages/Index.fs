module App.Pages

open Feliz

open Feliz.Router

let RootIndexPage =
    React.functionComponent
        (fun () ->
            Html.div [ Html.h1 [ prop.style [ style.marginRight 5 ]
                                 prop.text "wow2222" ]
                       Html.button [ prop.children [

                                                      ]
                                     prop.onClick (fun _ -> Router.navigatePath ("test")) ] ])
