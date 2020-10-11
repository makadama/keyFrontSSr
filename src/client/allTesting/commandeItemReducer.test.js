import { GET_COMMANDE_ITEM,  DELETE_COMMANDE_ITEM } from '../actions/types';
import commandeItemReducer from '../reducers/commandeItemReducer';


describe('testing commandeItem Reducer', ()=>{
	it(' should return default state of commandeItemReducer', ()=>{
		const newState = commandeItemReducer(undefined, {});
		expect(newState).toEqual({
			  commandeItems: [],
			  commandeItem: {},
			  loading: false
		})
	})


	it(' should return a state of commandeItemReducer', ()=>{
		const commande = {
							  commandeItems: [{id: 1, produit: 'chocolat', qte: 2, prix: 10}, {id: 2, produit: 'fleur', qte: 1, prix: 10}],
							  commandeItem: {},
							  loading: false
					   }
		const newState = commandeItemReducer(undefined, {
			type: GET_COMMANDE_ITEM,
			payload: commande.commandeItems
		});
		console.log(newState);
		expect(newState).toEqual(commande)
	})


	it(' should return a state of commandeItemReducer', ()=>{
		const commande = {
							  commandeItems: [{id: 1, produit: 'chocolat', qte: 2, prix: 10}, {id: 2, produit: 'fleur', qte: 1, prix: 10}],
							  commandeItem: {},
							  loading: false
					   }
		const newState = commandeItemReducer(undefined, {
			type: GET_COMMANDE_ITEM,
			payload: commande.commandeItems
		});
		console.log(newState);

		const productToDelete = {id: 2, produit: 'fleur', qte: 1, prix: 10};
		const commandeAfterDeleted = {
							  commandeItems: [{id: 1, produit: 'chocolat', qte: 2, prix: 10}],
							  commandeItem: {},
							  loading: false
					   };

		const newState2 = commandeItemReducer(newState, {
			type: DELETE_COMMANDE_ITEM,
			payload: productToDelete
		});
		console.log(newState2);
		expect(newState2).toEqual(commandeAfterDeleted)
	})
})