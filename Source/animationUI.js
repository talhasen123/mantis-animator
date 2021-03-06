var animationsFileNameInput;
var newAnimationNameInput;
var frameCounter;
var animationSelector;
var loopCheckbox;

function setupAnimationUI()
{
    function setupInputUIVariables()
    {
        animationsFileNameInput = document.getElementById( "animationFileNameInput");
        newAnimationNameInput = document.getElementById( "animationNameInput");
        frameCounter = document.getElementById( "fpsCounter");
        animationSelector = document.getElementById( "animSelector");
        loopCheckbox = document.getElementById( "loopCheckBox");
    };

    function setupSavingSystem()
    {
        let saveButton = document.getElementById( "saveAnimationsButton");
        saveButton.addEventListener( "click", (event) => {
            
            // save the aniamtions!
            saveJSON( animationsFileNameInput.value, animations);

        }, false);

        let loadButton = document.getElementById( "loadAnimationsButton");
        loadButton.addEventListener( "input",  loadJSON, false);
    };

    function setupAnimationButtons()
    {
        // get buttons and add click events!
        let startCaptureButton = document.getElementById( "startCaptureButton");
        startCaptureButton.onclick = startCapture;

        let saveFrameButton = document.getElementById( "saveFrameButton");
        saveFrameButton.onclick = setFrame;

        let finishCaptureButton = document.getElementById( "finishCaptureButton");
        finishCaptureButton.onclick = finishCapture;
    };

    function setupAnimatorUI()
    {
        let startAnimButton = document.getElementById( "playAnimButton");
        startAnimButton.onclick = playAnimation;

        let stopAnimButton = document.getElementById( "stopAnimButton");
        stopAnimButton.onclick = stopAnimation;
    };

    setupInputUIVariables();
    setupSavingSystem();
    setupAnimationButtons();
    setupAnimatorUI();
};

function updateAnimationsUIAfterLoad( loadedAnimations)
{
    stopAnimation();
    animations = loadedAnimations;

    while ( animationSelector.options.length) 
    {
        animationSelector.remove( 0);
    }

    for ( let i = 0; i < animations.length; i++)
    {
        animationSelector.add( new Option( animations[ i][ "name"]));
    }
};