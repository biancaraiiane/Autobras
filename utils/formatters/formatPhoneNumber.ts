// export function formatPhoneNumber(phoneNumber: string | undefined) {
//   if (!phoneNumber) return '-'
//   const preFormattedPhoneNumber = phoneNumber?.replace(/[^\d]/g, '')
//   const formatPhoneNumberLength = preFormattedPhoneNumber?.length
//   const phoneNumberLength = phoneNumber?.length
//   let formattedPhoneNumber = phoneNumber

//   if (formatPhoneNumberLength <= 3) {
//     formattedPhoneNumber = preFormattedPhoneNumber?.replace(
//       /(\d{2})(\d{1})/g,
//       '($1) $2'
//     )
//   } else if (formatPhoneNumberLength <= 7) {
//     formattedPhoneNumber = preFormattedPhoneNumber?.replace(
//       /(\d{2})(\d{1})(\d{1,4})/g,
//       '($1) $2$3'
//     )
//   } else if (formatPhoneNumberLength <= 10) {
//     formattedPhoneNumber = preFormattedPhoneNumber?.replace(
//       /(\d{2})(\d{1,4})(\d{1,4})/g,
//       '($1) $2-$3'
//     )
//   } else {
//     formattedPhoneNumber = preFormattedPhoneNumber?.replace(
//       /(\d{2})(\d{1})(\d{4})(\d{1,4})/g,
//       '($1) $2$3-$4'
//     )
//   }

//   if (phoneNumberLength > 15) {
//     formattedPhoneNumber = phoneNumber?.substring(0, phoneNumberLength - 1)
//   }

//   return formattedPhoneNumber
// }

export function formatPhoneNumber(phoneNumber: string | undefined) {
  if (!phoneNumber) return '-';

  // Remova todos os caracteres não numéricos do número
  const preFormattedPhoneNumber = phoneNumber.replace(/[^\d]/g, '');

  const formatPhoneNumberLength = preFormattedPhoneNumber.length;
  const phoneNumberLength = phoneNumber.length;
  let formattedPhoneNumber = phoneNumber;

  if (formatPhoneNumberLength <= 3) {
    formattedPhoneNumber = preFormattedPhoneNumber.replace(/(\d{3})/, '($1)');
  } else if (formatPhoneNumberLength <= 6) {
    formattedPhoneNumber = preFormattedPhoneNumber.replace(/(\d{3})(\d{1,3})/, '($1) $2');
  } else if (formatPhoneNumberLength <= 10) {
    formattedPhoneNumber = preFormattedPhoneNumber.replace(/(\d{3})(\d{3})(\d{1,4})/, '($1) $2-$3');
  } else {
    formattedPhoneNumber = preFormattedPhoneNumber.replace(/(\d{3})(\d{3})(\d{4})(\d{1,})/, '($1) $2-$3');
  }

  if (phoneNumberLength > 15) {
    formattedPhoneNumber = phoneNumber.substring(0, phoneNumberLength - 1);
  }

  return formattedPhoneNumber;
}
