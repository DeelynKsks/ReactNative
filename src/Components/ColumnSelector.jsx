import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { cardStyles, columnStyles } from '../Styles/CardStyles';

function ColumnSelector(props) {

    const {onSelect} = props
    
    const [selectedColumns, setSelectedColumns] = useState(2);

    const handleColumnSelect = (columns) => {
        setSelectedColumns(columns);
        onSelect(columns);
    }
    
  return (
    <View style={columnStyles.container}>
      <TouchableOpacity
        style={[columnStyles.button, selectedColumns === 1 && columnStyles.selected]}
        onPress={() => handleColumnSelect(1)}
      >
        <Text style={columnStyles.buttonText}>1 Columna</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[columnStyles.button, selectedColumns === 2 && columnStyles.selected]}
        onPress={() => handleColumnSelect(2)}
      >
        <Text style={columnStyles.buttonText}>2 Columnas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[columnStyles.button, selectedColumns === 3 && columnStyles.selected]}
        onPress={() => handleColumnSelect(3)}
      >
        <Text style={columnStyles.buttonText}>3 Columnas</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ColumnSelector