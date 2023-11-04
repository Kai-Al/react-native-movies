import { posterStyles } from "../styles";
import { useState, useEffect } from "react";
import { Text, View } from "react-native";

const Information = ({ activeMovie }) => {

  // Retornamos la estructura del componente

  return (
    <View>
      {activeMovie ? (
        <>
          <Text style={posterStyles.text}>Year: {activeMovie.Year}</Text>
          <Text style={posterStyles.text}>Type: {activeMovie.Type}</Text>
          <Text style={posterStyles.text}>Code IMDB: {activeMovie.imdbID}</Text>
        </>
      ) : (
        <Text style={posterStyles.text}>
          {activeMovie || "Sin datos de película"}
        </Text>
      )}
    </View>
  );
};

export default Information;
