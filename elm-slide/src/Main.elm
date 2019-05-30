port module Main exposing (Model, Msg(..), init, main, subscriptions, update, view)

import Browser
import Css exposing (..)
import Css.Global
import Html exposing (Attribute, Html, div, input, text)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)
import Html.Styled.Attributes exposing (css)
import Http



-- html : List Style -> Snippet
-- html =
--   [height "100%"]
-- main: Program Model Msg1
-- global : List Snippet -> Html msg
-- global =
--     Css.Global.global
--         [ Css.Global.html
--             [ Css.height (pct 100)
--             ]
--         , Css.Global.body
--             [ Css.height (pct 100)
--             ]
--         ]


main =
    Browser.element { init = init, update = update, subscriptions = subscriptions, view = view }


type alias Country =
    { code : String
    , name : String
    , phone : String
    , currency : String
    }



-- type Request
--     = Failure
--     | Loading
--     | Success String


type alias Model =
    { countrySearch : String
    , searchResults : List Country
    }


init : () -> ( Model, Cmd Msg )
init _ =
    ( Model "" []
    , Cmd.none
    )


type Msg
    = Search String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Search searchTerm ->
            ( { model | countrySearch = searchTerm }, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


view : Model -> Html Msg
view model =
    div []
        [ input [ placeholder "Search country", value model.countrySearch, onInput Search ] []
        , div [] [ text model.countrySearch ]
        , resultList model
        ]



-- render functions


resultList : Model -> Html msg
resultList model =
    if List.length model.searchResults == 0 && String.length model.countrySearch == 0 then
        div [] [ text "no results" ]

    else
        div [] [ text "all the results" ]
