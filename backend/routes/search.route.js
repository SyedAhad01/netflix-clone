import express from "express";
import { searchPerson, 
         searchMovie, 
         searchtv, 
         getSearchHistory, 
         removeItemFromSearchHistory } from '../controllers/search.controller.js';


const router = express.Router();

router.get("/person/:query",searchPerson);
router.get("/movie/:query",searchMovie);
router.get("/tv/:query",searchtv);


router.get("/history", getSearchHistory);

router.delete("/history/:id", removeItemFromSearchHistory)
export default router;