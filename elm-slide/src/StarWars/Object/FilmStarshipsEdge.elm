-- Do not manually edit this file, it was auto-generated by dillonkearns/elm-graphql
-- https://github.com/dillonkearns/elm-graphql


module StarWars.Object.FilmStarshipsEdge exposing (cursor, node)

import Graphql.Internal.Builder.Argument as Argument exposing (Argument)
import Graphql.Internal.Builder.Object as Object
import Graphql.Internal.Encode as Encode exposing (Value)
import Graphql.Operation exposing (RootMutation, RootQuery, RootSubscription)
import Graphql.OptionalArgument exposing (OptionalArgument(..))
import Graphql.SelectionSet exposing (SelectionSet)
import Json.Decode as Decode
import StarWars.InputObject
import StarWars.Interface
import StarWars.Object
import StarWars.Scalar
import StarWars.ScalarCodecs
import StarWars.Union


{-| The item at the end of the edge
-}
node : SelectionSet decodesTo StarWars.Object.Starship -> SelectionSet (Maybe decodesTo) StarWars.Object.FilmStarshipsEdge
node object_ =
    Object.selectionForCompositeField "node" [] object_ (identity >> Decode.nullable)


{-| A cursor for use in pagination
-}
cursor : SelectionSet String StarWars.Object.FilmStarshipsEdge
cursor =
    Object.selectionForField "String" "cursor" [] Decode.string
