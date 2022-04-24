var BaseType = field("BasisTyp");
var DisplayName;
switch (BaseType) {
	case 'Kauf':
		DisplayName = formatDate(field("Datum"));
		break;
	case 'Person':
		DisplayName = field("Vorname") + " " + field("Nachname");
		break;
	default:
		DisplayName = field("Name");
		break;
}
DisplayName = DisplayName + " [" + field("Id") + "]";