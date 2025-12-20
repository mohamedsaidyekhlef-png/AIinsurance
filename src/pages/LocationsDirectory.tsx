import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Globe } from 'lucide-react';

export const LocationsDirectory = () => {
  const countries = [
    { name: "USA", code: "usa", cities: ["Austin", "Miami", "San-Francisco", "New-York", "Chicago", "Seattle", "Denver"] },
    { name: "Canada", code: "canada", cities: ["Toronto", "Vancouver", "Montreal", "Calgary"] },
    { name: "UK", code: "uk", cities: ["London", "Manchester", "Birmingham"] },
    { name: "Australia", code: "australia", cities: ["Sydney", "Melbourne", "Brisbane"] }
  ];

  const niches = ["Auto-Theft", "Flood-Risk", "Tesla-Insurance", "Uber-Driver", "Small-Business"];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Global Risk Directory</h1>
          <p className="text-xl text-slate-600">
            Browse our hyper-local insurance guides covering 10,000+ cities and risk factors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {countries.map((country) => (
            <div key={country.code} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <Globe className="text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900">{country.name}</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {country.cities.map((city) => (
                  <div key={city}>
                    <h3 className="font-bold text-slate-700 mb-2 flex items-center gap-1">
                      <MapPin size={14} className="text-slate-400" /> {city.replace('-', ' ')}
                    </h3>
                    <ul className="space-y-1 pl-5">
                      {niches.map((niche) => (
                        <li key={niche}>
                          <Link 
                            to={`/insurance/${country.code}/${city.toLowerCase()}/${niche.toLowerCase()}`}
                            className="text-sm text-blue-600 hover:underline hover:text-blue-800 transition-colors"
                          >
                            {niche.replace('-', ' ')} Guide
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
