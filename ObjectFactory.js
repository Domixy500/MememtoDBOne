function CreateObject(BaseType) {
	var isType;
	var ObjectLibrary = libByName("Objekt");
	var obj = new Object();
	switch (BaseType) {
		case "Aktivität":
			isType = "Objekt, Aktivität";
			break;
                case "Arbeitsweg-Fahrrad":
                        BaseType = "Radfahren";
			isType = "Objekt, Aktivität, Radfahren";
			break;
		case "Gegenstand":
			isType = "Objekt, Gegenstand";
			break;
		case "Golfspielen":
			isType = "Objekt, Aktivität, Laufen, Golfspielen";
			break;
		case "Laufen":
			isType = "Objekt, Aktivität, Laufen";
			break;
		case "Messung-Körpermasse":
			isType = "Objekt, Aktivität, Messung-Körpermasse";
			break;
		case "Person":
			isType = "Objekt, Person";
			break;
		default:
			message(BaseType + " is not defined!")
			exit();
			break;
	}
	obj = ObjectLibrary.create(obj);
	if(arg("gekauft") == true) {
	  obj.set("gekauft", true);
	}
	obj.set("BasisTyp", BaseType);
	obj.set("istTyp", isType);
	DoPostCreation(obj, BaseType)
	obj.show();
}

function DoPostCreation(obj, BaseType) {
	switch (BaseType) {
		case "Aktivität":
			obj.set("Datum", moment().toDate());
			obj.set("isActive", true);
			break;
		case "Golfspielen":
			obj.set("Lauf-Typ", "Golf");
			DoPostCreation(obj, "Laufen");
			break;
		case "Laufen":
			DoPostCreation(obj, "Aktivität");
			break;
		case "Messung-Körpermasse":
			DoPostCreation(obj, "Aktivität");
			break;
		case "Radfahren":
			DoPostCreation(obj, "Aktivität");
			break;
		default:
			message("No action defined for '" + BaseType + "'!")
			break;
	}
}
