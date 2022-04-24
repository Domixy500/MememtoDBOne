function CreateObject(BaseType) {
	var isType;
	var ObjectLibrary = libByName("Objekt");
	var obj = new Object();
	switch (BaseType) {
		case "Gegenstand":
			isType = "Objekt, Gegenstand";
			break;
		case "Messung-Körpermasse":
			isType = "Objekt, Aktivität, Messung-Körpermasse";
			break;
		case "Person":
			isType = "Objekt, Person";
			break;
		default:
			message(Type + " is not defined!")
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
			break;
		case "Messung-Körpermasse":
			DoPostCreation(obj, "Aktivität");
			break;
		default:
			message("No action defined for '" + BaseType + "'!")
			break;
	}
}
