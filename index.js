import LinkElement from './modules/LinkedInput.js';
import {isEmpty, toEELISASeparator, wordLimit} from './modules/validators.js'
import AddToInput from './modules/LinkedButton.js'
import { renderTitle, renderTags, renderPlace, renderLanguajes, renderECTS, renderMoreInfo, rederCategories } from './modules/renderers.js';
import cardToPNG from './modules/cardToPNG.js'

! function () {
    const $ = (selector) => document.querySelector(selector)
    
    LinkElement (
        $('#nombre'),
        renderTitle,
        isEmpty
    )
    LinkElement (
        $('#epoca'),
        renderTags,
        isEmpty,
        toEELISASeparator
    )
    
    LinkElement (
        $('#moreInfo'),
        renderMoreInfo,
        isEmpty,
        wordLimit
    )
    
    LinkElement (
        $('#categories'),
        rederCategories,
        isEmpty,
        toEELISASeparator
    )

    LinkElement (
        $('#languaje'),
        renderLanguajes,
        isEmpty,
        toEELISASeparator
    )

    LinkElement (
        $('#lugar'),
        renderPlace,
        isEmpty,
        toEELISASeparator
    )

    LinkElement (
        $('#creditos'),
        renderECTS,
        isEmpty,
        toEELISASeparator
    )

    AddToInput (
        $('#epoca'),
        $('#addOtoño'),
        $('#addPrimavera'),
        $('#addVerano')
    )

    AddToInput (
        $('#languaje'),
        $('#addSpanish'),
        $('#addEnglish')
    )

    AddToInput (
        $('#categories'),
        $('#addAccion'),
        $('#addActitudes'),
        $('#addConocimiento'),
        $('#addDescubrimiento'),
        $('#addTransformacion')
    )

    $('#button-download').addEventListener('click', cardToPNG)
}();