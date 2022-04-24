var BaseType = field("BasisTyp");
var DisplayName;
switch (BaseType) {
	case 'Aktivität':
		DisplayName = formatDate(field("Datum"));
		break;
	case 'Friseur-Besuch':
		DisplayName = formatDate(field("Datum"))  + " bei " + field("Friseur")[0].field("Anzeigename");
		break;
	case 'Golfspielen':
		DisplayName = field("Streckenlänge") + " km   " + formatDate(field("Datum"));
		break;
	case 'Kauf':
		DisplayName = formatDate(field("Datum"));
		break;
	case 'Laufen':
		DisplayName = field("Streckenlänge") + " km " + formatDate(field("Datum"));
		break;
	case 'Messung-Körpermasse':
		DisplayName = field("Körpermasse") + " kg   " + formatDate(field("Datum"));
		break;
	case 'Person':
		DisplayName = field("Vorname") + " " + field("Nachname");
		break;
	case 'Radfahren':
		DisplayName = field("Streckenlänge") + " km   " + formatDate(field("Datum"));
		break;
	case 'Training-Crosstrainer':
		DisplayName = field("Streckenlänge") + " km   " + field("Kalorienverbrauch") + " Cal   " + formatDate(field("Datum"));
		break;
	default:
		DisplayName = field("Name");
		break;
}
DisplayName = DisplayName + "   [" + field("Id") + "]";