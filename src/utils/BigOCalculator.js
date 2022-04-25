import {
   AxiosClient,
   CBHttpCodeRunner,
   AnalysisService,
} from 'big-o-calculator';

// First occurrence of [runnerLanguage] in URI will be replaced with language
const codeRunnerUri = 'http://example.com/code-runner/[javascript]';
const codeRunner = new CBHttpCodeRunner(codeRunnerUri, new AxiosClient());
const calculator = new AnalysisService(codeRunner);
import Sorting from '../Shared/Sorting';
Sorting.SelectionSort({ funcArgs });
import {
   AlgorithmSpeed,
   BuiltInArgumentTypes,
   Language,
} from 'big-o-calculator';

let code: Code = {
   // Language of the tested code
   language: Language.JS,
   // Most languages handle data types differenty (e.g. integers vs strings).
   // This parameter tells the calculator about type of algorithm tested.
   expectedSpeed: AlgorithmSpeed.SLOW,
   // Tested code with function call and argument placeholder
   content:
      'Sorting.SelectionSort([1,2,3,5,54,679,215,02,5,55,6468]) { /*...*/ };Sorting.SelectionSort({funcArgs});',
   // Type of arguments to generate for tested code
   testedFunctionName: BuiltInArgumentTypes.RANDOM_NUMBERS,
};

// AnalysisService.analyze returns a promisified BigO value
calculator.analyze(code).then(analysisResult => {
   console.log(analysisResult.bigO); // O(n)
});
