const allEntities = [
    "characters",
    "episodes"
  ];
  
  const defaultState = allEntities.reduce(
      (acc, entity) => ({
        ...acc,
        [entity]: {
          byId: {},
          allIds: [],
        }
      }),
      {}
  );
  
  // Reducer compositions, delegate
  const entityReducer = (entity, state = {allIds: [], byId: {}}, action) => {
  
    const actionEntities = action.payload[entity];
    const {actionType} = action.meta;
  
    switch (actionType) {
      case 'GET_ALL':
        return {
          byId: {
            ...Object.keys(actionEntities).reduce(
                (acc, id) => ({
                  ...acc,
                  [id]: {
                    ...state.byId[id],
                    ...actionEntities[id]
                  }
                }),
                {}
            )
          },
          allIds: Object.keys(actionEntities).reduce(
              (allIds, id) => [...allIds, id],
              []
          )
        };
        case 'DELETE_ONE':
            return {
                byId: {
                  ...Object.keys(state.byId).reduce((acc,id) => {
                    let x = Object.keys(actionEntities)[0]
                    if (id !== x) return {...acc, [id]: state.byId[id]}
                    else return acc
                  }, {})
                    
                },
                allIds: state.allIds.reduce(
                    (allIds, id) => (actionEntities[id] ? allIds : [...allIds, id]),
                    []
                )
            };
        case 'UPDATE_ONE': 
            return {
              byId: {
                ...Object.keys(state.byId).reduce((acc,id) => {
                  let x = Object.keys(actionEntities)[0]
                  if (id !== x) return {...acc, [id]: state.byId[id]}
                  else return {...acc, [x]: {...state.byId[x], ...actionEntities[x]}}
                }, {})
                  
              },
              allIds: [...state.allIds]
            }
        case 'ADD_ONE': 
        return {
          byId: {
            ...state.byId,
            ...actionEntities
              
          },
          allIds: [...state.allIds, ...Object.keys(actionEntities)]
        }
        case 'DELETE_CHAR_FROM_EP':
          return {
            byId: {
              ...Object.keys(state.byId).reduce((acc,id) => {
                let x = Object.keys(actionEntities)[0]
                if (id === x) {
                  let updated = state.byId[id]
                  updated.characters = updated.characters.reduce((accum, next) => {
                    if (next === actionEntities[x].char) return accum
                    else return [...accum, next]
                  },[])
                  return {...acc, [updated.id]: updated}
                } else return {...acc, [id]: state.byId[id]}
              },{})
            },
            allIds: [...state.allIds]
            
          }

      default :
        console.log("Warning: Unsupported operation!");
    }
  };
  
  const entities = (state = defaultState, action) => {
    if (!action.meta || !action.meta.actionType) return state;

  
    return {
      ...state,
      ...Object.keys(action.payload).reduce(
          (acc, entity) => ({
            ...acc,
            [entity]: entityReducer(entity, state[entity], action)
          }),
          {}
      )
    };
  };
  
  const entitiesReducers = {entities};
  
  export default entitiesReducers;
  