import { ADD_MESSAGE, ADD_CHANNEL, ADD_PRIVATE_MESSAGE, CHANGE_SERVER, CHANGE_CHANNEL, GET_INITIAL_DATA, ADD_SERVER } from '../actions/types';

const initialState = {
  servers: {
    "Default-FANfDprXmt": {
      "channels": {
        "general-0m5vBsRnfd": [
        ],
        "gaming-p9DnvvrfWo": [
        ],
        "programming-aRoD4umYpb": [
        ],
        "cooking-v88UngJkiD": [
        ],
        "misc-uSje5DwUH0": [
        ],
        "/b/-Ry06VYrX3x": [
        ]
      },
      "activeUsers": [

      ]
    }
  },
  privateMessages: {
  },
  activeServer: 'Default-FANfDprXmt',
  activeChannel: 'general-0m5vBsRnfd',
}

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let { server, channel, from, msg } = action.payload;
      return {
        ...state,
        servers: {
          ...state.servers,
          [server]: {
            ...state.servers[server],
            "channels": {
              ...state.servers[server].channels,
              [channel]: [
                ...state.servers[server]["channels"][channel], { from: from, msg: msg }
              ]
            }
          }
        }
      }
    case ADD_CHANNEL:
      return {
        ...state,
        servers: {
          ...state.servers,
          [action.payload.server]: {
            ...state.servers[action.payload.server],
            "channels": {
              ...state.servers[action.payload.server].channels,
              [action.payload.channel]: [

              ]
            }
          }
        }
      }
    case ADD_SERVER:
      return {
        ...state,
        servers: {
          ...state.servers,
          [action.payload.server]: {
            "channels": {
              [action.payload.channel]: [
              ]
            }
          }
        }
      }
    case GET_INITIAL_DATA:
      return { ...state, servers: action.payload, activeServer: Object.keys(action.payload)[0], activeChannel: Object.keys(action.payload[Object.keys(action.payload)[0]]["channels"])[0] };
    case ADD_PRIVATE_MESSAGE:
      if (state.privateMessages[action.payload.user]) {
        return {
          ...state,
          privateMessages: {
            ...state.privateMessages,
            [action.payload.user]: [
              ...state.privateMessages[action.payload.user], { from: action.payload.from, to: action.payload.to, msg: action.payload.text }
            ]
          }
        }
      }
      else return {
        ...state,
        privateMessages: {
          ...state.privateMessages,
          [action.payload.user]: [
            { from: action.payload.from, to: action.payload.to, msg: action.payload.text }
          ]
        }
      }
    case CHANGE_SERVER:
      return { ...state, activeServer: action.payload, activeChannel: Object.keys(state.servers[action.payload]["channels"])[0] }
    case CHANGE_CHANNEL:
      return { ...state, activeChannel: action.payload }
    default:
      return { ...state };
  }
}
