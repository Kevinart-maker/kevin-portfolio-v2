// module.exports = {
//     theme: {
//         extend: {
//             textShadow: {
//                 sm: '1px 1px 2px rgba(0,0,0,0.5)',
//                 DEFAULT: '2px 2px 4px rgba(0,0,0,0.5)',
//                 lg: '4px 4px 8px rgba(0,0,0,0.5)',
//             }
//         }
//     }
// },
// plugins: [
//     function({ addUtilities }) {
//         const textShadow = theme('textShadow')
//         const utilities = Object.keys(textShadow).map(key => ({
//             [`.text-shadow${key === 'DEFAULT' ? '' : '-${key}'}`] : {
//                 textShadow: textShadow[key],
//             }
//         }))
//         addUtilities(utilities)
//     }
// ]