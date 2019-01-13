(function ($, window, document, BIZTRAVEL) {
    BIZTRAVEL.typeForm = (function () {
        function _typeForm() {
            var _self = this,
                questionWrapper,
                questionsCount,
                questionContainer,
                welcomeSection,
                mainSection,
                mainSectionCTA,
                progressContainer,
                boolLoad,
                questions = [],
                totalQuestions,
                progressIncrement,
                curProgress = 0;
                $doc = $(document);

            /**
             * @method: globalVar
             * @usage: Inside contructor this.globalVar();
             * @useCase: For initializing Object global attributes.
             */

            _self.globalVar = function () {
                questionWrapper = $('.question-wrapper');
                welcomeSection = $('.typeform-welcome-section');
                mainSection = $('.typeform-main-section');
                progressContainer = $('.typeform-progress-bar');
                totalQuestions = $('.typeform-question-item').length;
                boolLoad = false;
                questionsCount = questionWrapper.length;
                progressIncrement = 100/questionsCount;
            };

            _self.attachEvents = function () {
                $(window).on("scroll", function () {
                    for (var i = 0; i < questionsCount; i++) {
                        var eleScrollOffset = $(questionWrapper[i]).offset().top - $(window).scrollTop();
                        if (eleScrollOffset <= 250 && eleScrollOffset >= 0) {
                            $(questionWrapper[i]).addClass("unopaque");
                        } else {
                            $(questionWrapper[i]).removeClass("unopaque");
                        }
                    }
                })

                $(window).on("keyup", function (e) {
                    if ($(e.target).val().length === 0) {
                        $(e.target).next().css("visibility", "hidden");
                    } else {
                        $(e.target).next().css("visibility", "inherit");
                    }
                })

                $doc.on("click", ".ok-cta", function () {
                    $('html, body').animate({
                        scrollTop: $(this).parent().parent().parent().parent().next().offset().top
                    }, 500);
                    curProgress = curProgress + progressIncrement;
                    $('.progress-count').html(curProgress);
                    $('.progress').css("width", curProgress+"%");
                    progressContainer.css("display","block");

                })
                $doc.on("click", ".start-cta", function (e) {
                    welcomeSection.fadeOut();
                    mainSection.fadeIn().css({
                        top: 1000,
                        position: 'absolute'
                    }).animate({
                        top: 0
                    }, 300, function () {}).css("position", "relative");
                })
                $doc.on("keypress", function (e) {
                    if (e.which === 13 && !boolLoad) {
                        boolLoad = true;
                        $(".start-cta").css("opacity","0.4");
                        welcomeSection.fadeOut();
                        mainSection.fadeIn().css({
                            top: 1000,
                            position: 'absolute'
                        }).animate({
                            top: 0
                        }, 300, function () {}).css("position", "relative");
                    }
                })

            };



            /**
             * @method: onPageLoad
             * @usage: Used for calling methods on page load;
             * @useCase: Calls attachEvents method for attaching all events on page load only.
             */

            _self.onPageLoad = function () {
                _self.attachEvents();
            };

            /**
             * @method: init
             * @usage: Creates a chat instance on component initialization;
             * @useCase: Creates a new instance of chat object which the specified APIURL.
             */
            _self.init = function () {
                _self.globalVar();
            };

            /**
             * @method: load
             * @usage: Used for calling methods on pageload;
             * @useCase: Calls on page load for triggering all methods inside the onPageLoad method.
             */
            _self.load = function () {
                _self.onPageLoad();
            };

            return this;
        }
        return new _typeForm();
    }());

    $(function () {
        BIZTRAVEL.typeForm.init();
    });

    $(window).on('load', function () {
        BIZTRAVEL.typeForm.load();
    });

})(jQuery, this, this.document, window.BIZTRAVEL = window.BIZTRAVEL || {});