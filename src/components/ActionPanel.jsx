import React from 'react';

/* Need to build a blank cell list when user clicks CLEAR ALL */
import { buildCellList } from '../utils';

/**
 * The ActionPanel component represents the interface for updating the Grid
 * based on any number of buttons the user might click on.
 */
const ActionPanel = (props) => {
  const activeColor = props.activeColor
  const cellList = props.cellList
  const setCellList = props.setCellList
  /**
   * Create constants for activeColor, cellList, and setCellList, reading them from the props
   */

  return <div className="action-panel">
    {/* 
      This button needs an onClick function which:
        - creates a new cell list using buildCellList
        - passes the new cell list to setCellList
    */}
    <button  onClick={()=>{cellList.map ((element, index) => {
      const copy=[...cellList]
      copy[index].color = null
      setCellList(copy)
    })}}>clear all</button>
    {/* 
      This button needs an onClick function which:
        - creates a new cell list using buildCellList
        - loops over it, setting the color on each cell to activeColor
        - passes the new cell list to setCellList
    */}
    <button onClick={()=>{cellList.map ((element, index) => {
      const copy=[...cellList]
      copy[index].color = activeColor
      setCellList(copy)
    })}}>fill all</button>
    {/* 
      This button needs an onClick function which:
        - creates a new cell list using buildCellList
        - loops over the original cellList, and for each cell in it:
          - set the corresponding (by index) new cell to its color (if it has one) OR
          - set the corresponding (by index) new cell to the activeColor
    */}
    <button onClick={()=>{
      console.log(cellList.map((element,index) =>{
        const copy=[...cellList]
          if (copy[index].color === null) {
            copy[index].color = activeColor
          } else {
            copy[index].color = copy[index].color
        }
        setCellList(copy)
      }))
    }}>fill empty</button>
  </div>
}

export default ActionPanel;