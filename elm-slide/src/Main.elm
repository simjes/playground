module Main exposing (Model, Msg(..), init, main, update, view)

import Browser
import Graphql.Http
import Graphql.Operation exposing (RootQuery)
import Graphql.OptionalArgument as OptionalArgument exposing (OptionalArgument(..))
import Graphql.SelectionSet as SelectionSet exposing (SelectionSet, with, withDefault)
import Html exposing (Attribute, Html, div, h1, h2, header, img, input, li, main_, p, section, text, ul)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)
import RemoteData exposing (RemoteData)
import StarWars.Object
import StarWars.Object.PeopleConnection as PeopleConnection
import StarWars.Object.Person as Person
import StarWars.Query as Query



---- GRAPHQL ----


type alias Response =
    Maybe PeopleConnection


type alias PeopleConnection =
    { people : Maybe (List (Maybe Person))
    }


type alias Person =
    { name : Maybe String
    , birthYear : Maybe String
    , eyeColor : Maybe String
    }


query : SelectionSet (Maybe PeopleConnection) RootQuery
query =
    Query.allPeople identity allPeopleConnection


allPeopleConnection : SelectionSet PeopleConnection StarWars.Object.PeopleConnection
allPeopleConnection =
    SelectionSet.map PeopleConnection
        (PeopleConnection.people personSelection)


personSelection : SelectionSet Person StarWars.Object.Person
personSelection =
    SelectionSet.map3 Person
        Person.name
        Person.birthYear
        Person.eyeColor


makeRequest : Cmd Msg
makeRequest =
    query
        |> Graphql.Http.queryRequest "https://elm-slide-swapi.herokuapp.com/"
        |> Graphql.Http.send (RemoteData.fromResult >> StarWarsResponse)



-- MODEL ----


type alias Model =
    { countrySearch : String
    , peopleResponse : RemoteData (Graphql.Http.Error Response) Response
    }


init : ( Model, Cmd Msg )
init =
    ( Model "" RemoteData.Loading
    , makeRequest
    )



---- UPDATE ----


type Msg
    = Search String
    | StarWarsResponse (RemoteData (Graphql.Http.Error Response) Response)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Search searchTerm ->
            ( { model | countrySearch = searchTerm }, Cmd.none )

        StarWarsResponse response ->
            ( { model | peopleResponse = response }, Cmd.none )



---- VIEW ----


headerContent : Model -> Html Msg
headerContent model =
    header [] [ img [ src "/logo.svg" ] [] ]


mainContent : Model -> Html Msg
mainContent model =
    main_ []
        [ h1 [] [ text "Elm-slide" ]
        , h2 [] [ text "This application is part of the simjes playground" ]
        , p [] [ text "The playground is a repository for creating small and simple applications to test out new technologies and frameworks" ]
        , slide model
        ]


slide : Model -> Html Msg
slide model =
    section []
        [ input [ placeholder "Search country", value model.countrySearch, onInput Search ] []
        , renderResponse model.peopleResponse
        ]


renderResponse : RemoteData (Graphql.Http.Error Response) Response -> Html Msg
renderResponse peopleResponse =
    case peopleResponse of
        RemoteData.NotAsked ->
            text "Init"

        RemoteData.Loading ->
            text "Loading..."

        RemoteData.Failure err ->
            text "An Error occured"

        RemoteData.Success result ->
            case result of
                Just allPeople ->
                    case allPeople.people of
                        Just people ->
                            renderPersonList people

                        Nothing ->
                            div []
                                []

                Nothing ->
                    text "No results"


renderPersonList : List (Maybe Person) -> Html Msg
renderPersonList people =
    people
        |> List.map renderPerson
        |> ul [ class "people" ]


renderPerson : Maybe Person -> Html Msg
renderPerson person =
    case person of
        Just p ->
            li [ class "person" ]
                [ div [] [ text (p.name |> Maybe.withDefault "11111111111") ]
                ]

        Nothing ->
            text ""


view : Model -> Html Msg
view model =
    div [ id "elm-slide" ]
        [ headerContent model
        , mainContent model
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
