# Anontius

Personal Asking Portal (like ASK.fm)

## Setup Instructions

### Initializing

```sh
git clone https://github.com/MunifTanjim/anontius
cd anontius
npm install
```

### Firebase Setup

- Create a new Firebase project from the [Firebase Console](https://console.firebase.google.com).

- Enable _**Email/Password**_ Sign-in provider from the _**Authentication**_ > _**Sign-in Method**_ section.

- Add an user from the _**Authentication**_ > _**Users**_ section.

### Configuration

Login the CLI into Firebase:

```sh
firebase login
```

Get necessary setup information for the Firebase JS SDK:

```sh
firebase setup:web --project <alias_or_project_id>
```

Fill the Firebase JS SDK setup information in the `.env` or `.env.local` file.

You can change other configurations in the `/src/config.js` file.

### Build & Deploy

```sh
npm build
firebase deploy --project <alias_or_project_id>
```

## Changelog

[Changelog for Anontius](https://github.com/MunifTanjim/anontius/blob/master/CHANGELOG.md)

## License

Anontius is licensed under the MIT License. Check the [LICENSE](https://github.com/MunifTanjim/anontius/blob/master/LICENSE) file for details.
