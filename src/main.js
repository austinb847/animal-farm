import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Pet } from "./pet.js";


$(document).ready(function() {
  let coco = new Pet("Coco");

  function initializeHunger() {
    coco.setHunger();
    setInterval( () => {
     $(".foodLevel").text(coco.foodLevel);
    }, 20000);
  }
  
  (function() {
    initializeHunger();
  })();
  

  $(".feedButton").click(function() {
    coco.feed();
    $(".foodLevel").text(coco.foodLevel);
    $(".healthLevel").text(coco.healthLevel);
    $(".energyLevel").text(coco.energyLevel);
  });

});