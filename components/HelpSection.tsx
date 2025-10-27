"use client";

import { useState, useEffect } from "react";
import { Clock, MapPin, Headphones, Send } from "lucide-react";
import carData from "@/data/carData.json";

// Types de pièces avec sous-catégories
const partGroups = [
  "Freinage",
  "Moteur & Transmission",
  "Suspension & Direction",
  "Échappement",
  "Carrosserie",
  "Éclairage",
  "Pneus & Jantes",
  "Batterie & Électrique",
  "Climatisation & Chauffage",
  "Intérieur & Accessoires",
  "Filtres & Huiles",
  "Système de Refroidissement",
  "Pare-brise & Vitres"
].sort();

const partSubgroups: { [key: string]: string[] } = {
  "Freinage": [
    "Plaquettes de frein avant",
    "Plaquettes de frein arrière",
    "Disques de frein avant",
    "Disques de frein arrière",
    "Étriers de frein",
    "Liquide de frein",
    "Câbles de frein",
    "Tambours de frein",
    "Cylindres de roue",
    "Maître-cylindre"
  ],
  "Moteur & Transmission": [
    "Huile moteur",
    "Courroie de distribution",
    "Courroie d'accessoires",
    "Bougies d'allumage",
    "Bobines d'allumage",
    "Injecteurs",
    "Turbocompresseur",
    "Embrayage",
    "Boîte de vitesses",
    "Démarreur",
    "Alternateur"
  ],
  "Suspension & Direction": [
    "Amortisseurs avant",
    "Amortisseurs arrière",
    "Ressorts de suspension",
    "Rotules de suspension",
    "Silent-blocs",
    "Biellettes de direction",
    "Crémaillère de direction",
    "Pompe de direction assistée",
    "Bras de suspension"
  ],
  "Échappement": [
    "Pot d'échappement",
    "Catalyseur",
    "Silencieux",
    "Collecteur d'échappement",
    "Filtre à particules (FAP)",
    "Tuyau d'échappement",
    "Joints d'échappement"
  ],
  "Carrosserie": [
    "Pare-chocs avant",
    "Pare-chocs arrière",
    "Ailes avant",
    "Ailes arrière",
    "Capot",
    "Hayon",
    "Portes",
    "Calandre",
    "Bas de caisse"
  ],
  "Éclairage": [
    "Phares avant",
    "Feux arrière",
    "Feux de brouillard avant",
    "Feux de brouillard arrière",
    "Feux de jour (LED)",
    "Clignotants",
    "Ampoules H1",
    "Ampoules H7",
    "Ampoules LED"
  ],
  "Pneus & Jantes": [
    "Pneus été",
    "Pneus hiver",
    "Pneus 4 saisons",
    "Jantes alliage",
    "Jantes acier",
    "Enjoliveurs",
    "Valves de pneu",
    "Écrous de roue"
  ],
  "Batterie & Électrique": [
    "Batterie",
    "Alternateur",
    "Démarreur",
    "Fusibles",
    "Relais",
    "Capteurs",
    "Câblage électrique",
    "Bougie de préchauffage"
  ],
  "Climatisation & Chauffage": [
    "Compresseur de climatisation",
    "Condenseur",
    "Radiateur de chauffage",
    "Ventilateur d'habitacle",
    "Gaz réfrigérant",
    "Filtre d'habitacle",
    "Thermostat"
  ],
  "Intérieur & Accessoires": [
    "Sièges",
    "Tapis de sol",
    "Volant",
    "Levier de vitesse",
    "Tableau de bord",
    "Console centrale",
    "Airbags",
    "Ceintures de sécurité"
  ],
  "Filtres & Huiles": [
    "Filtre à huile",
    "Filtre à air",
    "Filtre à carburant",
    "Filtre d'habitacle",
    "Huile moteur",
    "Huile de boîte",
    "Liquide de refroidissement",
    "Liquide de frein"
  ],
  "Système de Refroidissement": [
    "Radiateur",
    "Ventilateur de radiateur",
    "Thermostat",
    "Pompe à eau",
    "Vase d'expansion",
    "Durites de refroidissement",
    "Liquide de refroidissement"
  ],
  "Pare-brise & Vitres": [
    "Pare-brise",
    "Vitres latérales",
    "Lunette arrière",
    "Joint de pare-brise",
    "Mécanisme de lève-vitre",
    "Essuie-glaces avant",
    "Essuie-glaces arrière",
    "Balais d'essuie-glace"
  ]
};

export default function HelpSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    year: "",
    make: "",
    model: "",
    matricule: "",
    partGroup: "",
    partSubgroup: "",
    additionalInfo: "",
  });
  const [availableModels, setAvailableModels] = useState<string[]>([]);
  const [availableSubgroups, setAvailableSubgroups] = useState<string[]>([]);
  
  // Generate years from 1941 to current year
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1940 }, (_, i) => currentYear - i);
  
  // Get car makes from JSON data
  const carMakes = Object.keys(carData).sort();

  // Update available models when make changes
  useEffect(() => {
    if (formData.make) {
      const models = carData[formData.make as keyof typeof carData] || [];
      setAvailableModels(models);
      // Reset model when make changes
      setFormData(prev => ({ ...prev, model: "" }));
    } else {
      setAvailableModels([]);
    }
  }, [formData.make]);

  // Update available subgroups when part group changes
  useEffect(() => {
    if (formData.partGroup && partSubgroups[formData.partGroup]) {
      setAvailableSubgroups(partSubgroups[formData.partGroup]);
    } else {
      setAvailableSubgroups([]);
    }
    // Reset subgroup when group changes
    setFormData(prev => ({ ...prev, partSubgroup: "" }));
  }, [formData.partGroup]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Besoin d'aide pour trouver la bonne pièce ?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Notre équipe d'experts est disponible 7j/7 pour vous conseiller et vous aider à
            trouver exactement ce dont vous avez besoin pour votre véhicule.
          </p>
        </div>

        {/* Modern Form */}
        <div className="max-w-4xl mx-auto mb-12">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200">
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Nom Complet *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Votre nom"
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Numéro de Téléphone *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+33 6 12 34 56 78"
                  required
                />
              </div>
            </div>

            {/* Vehicle Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Year Field */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Année *</label>
                <select
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                  required
                >
                  <option value="">Sélectionnez une année</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Make Field */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Marque *</label>
                <select
                  value={formData.make}
                  onChange={(e) => setFormData({ ...formData, make: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                  required
                >
                  <option value="">Sélectionnez une marque</option>
                  {carMakes.map((make) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Model Field */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Modèle *</label>
                <select
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  required
                  disabled={!formData.make}
                >
                  <option value="">
                    {!formData.make 
                      ? "Choisissez d'abord une marque" 
                      : availableModels.length === 0
                        ? "Aucun modèle disponible"
                        : "Sélectionnez un modèle"}
                  </option>
                  {availableModels.map((model, index) => (
                    <option key={`${model}-${index}`} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>

              {/* Matricule Field */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Matricule (optionnel)</label>
                <input
                  type="text"
                  value={formData.matricule}
                  onChange={(e) => setFormData({ ...formData, matricule: e.target.value.toUpperCase() })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all uppercase"
                  placeholder="AA-123-BB"
                />
              </div>
            </div>

            {/* Part Group & Subgroup Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Part Group Field */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Groupe de Pièce *</label>
                <select
                  value={formData.partGroup}
                  onChange={(e) => setFormData({ ...formData, partGroup: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                  required
                >
                  <option value="">Sélectionnez un groupe</option>
                  {partGroups.map((group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              </div>

              {/* Part Subgroup Field */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Sous-groupe de Pièce *</label>
                <select
                  value={formData.partSubgroup}
                  onChange={(e) => setFormData({ ...formData, partSubgroup: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  required
                  disabled={!formData.partGroup}
                >
                  <option value="">
                    {formData.partGroup ? "Sélectionnez un sous-groupe" : "Choisissez d'abord un groupe"}
                  </option>
                  {availableSubgroups.map((subgroup) => (
                    <option key={subgroup} value={subgroup}>
                      {subgroup}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-2 text-gray-700">Informations Supplémentaires (optionnel)</label>
              <textarea
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="Ajoutez toute information supplémentaire concernant la pièce recherchée..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl flex items-center justify-center gap-3 group"
            >
              <span className="text-lg">Envoyer ma Demande</span>
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-center text-gray-400 text-sm mt-4">
              Nous vous livrons dans les 24 heures
            </p>
          </form>
        </div>

        {/* Bottom Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-gray-300">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock size={24} className="text-primary" />
            </div>
            <div>
              <h4 className="font-bold mb-1 text-gray-900">Horaires d'ouverture</h4>
              <p className="text-gray-600 text-sm">Lun - Dim : 8h00 - 22h00</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin size={24} className="text-primary" />
            </div>
            <div>
              <h4 className="font-bold mb-1 text-gray-900">Notre Magasin</h4>
              <p className="text-gray-600 text-sm">123 Rue de l'Auto, Paris</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Headphones size={24} className="text-primary" />
            </div>
            <div>
              <h4 className="font-bold mb-1 text-gray-900">Equipe Expert</h4>
              <p className="text-gray-600 text-sm">+10 ans d'expérience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

