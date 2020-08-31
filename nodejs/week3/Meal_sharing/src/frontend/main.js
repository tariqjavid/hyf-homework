var root = document.location.origin;
var router = new Navigo(root);

// when no route specified it assumes the base route: "/"
router.on(window.handleHomeRequest).resolve();
router.on("/home",window.handleHomeRequest).resolve();
router.on("/meals", window.handleMealsRequest).resolve();
router.on("/joinus", window.handlejoinUsRequest).resolve();
router.on("/sharemeal",window.handleShareMealRequest).resolve();
router.on("/contactus",window.handleContactUsRequest).resolve();
router.on("/thanks", window.handleThanksRequest).resolve();
router.on("/reserve", window.handleReserveRequest).resolve();
router.on("/signin", window.handlesignInRequest).resolve();
router.on("/yourReservation",window.handleyourReservationRequest).resolve();

