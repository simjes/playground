module Main exposing (Country, Model, Msg(..), init, main, update, view)

import Browser
import Html exposing (Attribute, Html, div, input, text, img, h1)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)


---- MODEL ----
type alias Country =
    { code : String
    , name : String
    , phone : String
    , currency : String
    }


type alias Model =
    { countrySearch : String
    , searchResults : List Country
    }


init : ( Model, Cmd Msg )
init =
    ( Model "" []
    , Cmd.none
    )


---- UPDATE ----
type Msg
    = Search String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Search searchTerm ->
            ( { model | countrySearch = searchTerm }, Cmd.none )


---- VIEW ----
resultList : Model -> Html msg
resultList model =
    if List.length model.searchResults == 0 && String.length model.countrySearch == 0 then
        div [] [ text "no results" ]

    else
        div [] [ text "all the results" ]

view : Model -> Html Msg
view model =
    div []
        [ img [ src "/logo.svg" ] []
        , h1 [] [ text "Your Elm App is working!" ]
        , input [ placeholder "Search country", value model.countrySearch, onInput Search ] []
        , div [] [ text model.countrySearch ]
        , resultList model
        ]


---- PROGRAM ----
main : Program () Model Msg
main =
    Browser.element
        { view = view
        , init = \_ -> init
        , update = update
        , subscriptions = always Sub.none
        }
