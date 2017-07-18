import {
  DID_GET_CARDS,
  DID_GET_CARD,
  DID_CREATE_CARD,
  DID_DELETE_CARD
} from '../action_types'

const API_URL = 'https://api.magicthegathering.io/v1/cards/'

export const getCards = () => {
  console.log('action creator')
  return ({
    type: DID_GET_CARDS,
    payload: [{
      'name': 'Air Elemental',
      'manaCost': '{3}{U}{U}',
      'cmc': 5,
      'colors': [
        'Blue'
      ],
      'colorIdentity': [
        'U'
      ],
      'type': 'Creature — Elemental',
      'types': [
        'Creature'
      ],
      'subtypes': [
        'Elemental'
      ],
      'rarity': 'Uncommon',
      'set': 'LEA',
      'setName': 'Limited Edition Alpha',
      'text': 'Flying',
      'flavor': 'These spirits of the air are winsome and wild, and cannot be truly contained. Only marginally intelligent, they often substitute whimsy for strategy, delighting in mischief and mayhem.',
      'artist': 'Richard Thomas',
      'power': '4',
      'toughness': '4',
      'layout': 'normal',
      'multiverseid': 94,
      'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=94&type=card',
      'printings': [
        'LEA',
        'LEB',
        '2ED',
        'CED',
        'CEI',
        '3ED',
        '4ED',
        '5ED',
        'PO2',
        '6ED',
        'S99',
        'BRB',
        'BTD',
        '7ED',
        '8ED',
        '9ED',
        '10E',
        'DD2',
        'M10',
        'DPA',
        'ME4',
        'DD3_JVC',
        'W17'
      ],
      'originalText': 'Flying',
      'originalType': 'Summon — Elemental',
      'legalities': [
        {
          'format': 'Commander',
          'legality': 'Legal'
        },
        {
          'format': 'Legacy',
          'legality': 'Legal'
        },
        {
          'format': 'Modern',
          'legality': 'Legal'
        },
        {
          'format': 'Vintage',
          'legality': 'Legal'
        }
      ],
      'id': '926234c2fe8863f49220a878346c4c5ca79b6046'
    }]
  })
}

export const getCard = id => {
  return {
    type: DID_GET_CARD,
    payload: fetch(API_URL + `${id}`).then(res => res.json()).then(jsonRes => jsonRes)
  }
}
