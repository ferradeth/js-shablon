import { menu } from "./menu.js";
import { auth } from "./auth.js";
import { cart } from "./cart.js";
import { gallery } from "./gallery.js";
import { getCards } from "./api.js";
getCards()
    .then(data => menu(data.cards))

auth()
cart()
gallery()
