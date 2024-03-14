export class IconEntryNotFoundException extends Error {
  constructor(message = 'Icon entry not found.') {
    super(message);
  }
}
