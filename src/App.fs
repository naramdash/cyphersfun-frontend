module App

open Feliz
open Feliz.Router

open App.Pages

[<ReactComponent>]
let Router () =
    let (currentUrl, updateUrl) = React.useState (Router.currentPath ())

    React.router [

                   router.pathMode
                   router.onUrlChanged updateUrl
                   router.children [ match currentUrl with
                                     | [] -> RootIndexPage()
                                     | [ "test" ] -> Html.h1 "Users page"
                                     //  | [ "users"; Route.Int userId ] -> Html.h1 (sprintf "User ID %d" userId)
                                     | _ -> Html.h1 "Not found" ] ]

open Browser.Dom
ReactDOM.render (Router(), document.getElementById "app")
