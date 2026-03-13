'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import {
  carMakesAndModels,
  tamilNaduDistricts,
  fuelTypes,
  baseCarPrices,
  fuelAdjustmentFactors,
  CURRENT_YEAR,
  DEPRECIATION_RATE,
  WHATSAPP_NUMBER,
  WHATSAPP_MESSAGE,
} from '@/lib/constants';

interface FormState {
  currentStep: 1 | 2 | 3;
  carMake: string;
  carModel: string;
  carYear: number | null;
  fuelType: string;
  city: string;
  showResult: boolean;
  valuation: {
    estimatedPrice: number;
    priceRange: string;
    breakdown: string;
  } | null;
}

export function ValuationForm() {
  const [formState, setFormState] = useState<FormState>({
    currentStep: 1,
    carMake: '',
    carModel: '',
    carYear: null,
    fuelType: '',
    city: '',
    showResult: false,
    valuation: null,
  });

  const stepVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const calculateMockValuation = useCallback((): void => {
    const carKey = `${formState.carMake}-${formState.carModel}`;
    const basePrice = baseCarPrices[carKey] || 1000000;

    // Year depreciation (6% per year)
    const yearsOld = CURRENT_YEAR - (formState.carYear || CURRENT_YEAR);
    const depreciationFactor = Math.pow(DEPRECIATION_RATE, Math.max(0, yearsOld));

    // Fuel type adjustment
    const fuelAdjustment = fuelAdjustmentFactors[formState.fuelType] || 1.0;

    const estimatedPrice = Math.round(
      basePrice * depreciationFactor * fuelAdjustment
    );

    const variance = Math.round(estimatedPrice * 0.1); // ±10% variance
    const minPrice = estimatedPrice - variance;
    const maxPrice = estimatedPrice + variance;

    setFormState((prev) => ({
      ...prev,
      showResult: true,
      valuation: {
        estimatedPrice,
        priceRange: `₹${minPrice.toLocaleString()} - ₹${maxPrice.toLocaleString()}`,
        breakdown: `Based on ${formState.carMake} ${formState.carModel} (${formState.carYear}), ${formState.fuelType}, registered in ${formState.city}.`,
      },
    }));
  }, [formState]);

  const handleNext = (): void => {
    if (formState.currentStep === 3) {
      calculateMockValuation();
    } else {
      setFormState((prev) => ({
        ...prev,
        currentStep: (prev.currentStep + 1) as 1 | 2 | 3,
      }));
    }
  };

  const handleBack = (): void => {
    setFormState((prev) => ({
      ...prev,
      currentStep: (prev.currentStep - 1) as 1 | 2 | 3,
    }));
  };

  const handleReset = (): void => {
    setFormState({
      currentStep: 1,
      carMake: '',
      carModel: '',
      carYear: null,
      fuelType: '',
      city: '',
      showResult: false,
      valuation: null,
    });
  };

  const handleWhatsAppClick = (): void => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const canProceed = (): boolean => {
    switch (formState.currentStep) {
      case 1:
        return Boolean(
          formState.carMake && formState.carModel && formState.carYear
        );
      case 2:
        return Boolean(formState.fuelType);
      case 3:
        return Boolean(formState.city);
      default:
        return false;
    }
  };

  const availableModels = formState.carMake
    ? carMakesAndModels[formState.carMake] || []
    : [];

  const years = Array.from(
    { length: CURRENT_YEAR - 2005 },
    (_, i) => CURRENT_YEAR - i
  );

  if (formState.showResult && formState.valuation) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <Card className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-md mx-auto border-0">
          {/* Success Icon */}
          <motion.div
            className="flex justify-center mb-6"
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
          </motion.div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-slate-900">
            Your Estimated Valuation
          </h2>
          <p className="text-center text-slate-600 mb-8">
            Based on your car details
          </p>

          {/* Price Display */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 mb-6 border border-amber-200">
            <p className="text-slate-600 text-sm font-medium mb-2">Estimated Price</p>
            <motion.p
              className="text-4xl md:text-5xl font-bold text-slate-900"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              ₹{formState.valuation.estimatedPrice.toLocaleString()}
            </motion.p>
            <p className="text-slate-600 text-sm mt-3">
              Range: {formState.valuation.priceRange}
            </p>
          </div>

          {/* Breakdown */}
          <div className="bg-slate-50 rounded-lg p-4 mb-8">
            <p className="text-sm text-slate-700">
              <span className="font-semibold">Note:</span>{' '}
              {formState.valuation.breakdown}
            </p>
            <p className="text-xs text-slate-600 mt-3">
              This is a mock valuation. Final price depends on comprehensive car condition inspection.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-6 transition-all duration-300 hover:shadow-lg"
            >
              Schedule Free Inspection via WhatsApp
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              size="lg"
              className="w-full py-6"
            >
              Try Another Valuation
            </Button>
          </div>
        </Card>
      </motion.div>
    );
  }

  return (
    <Card className="bg-white rounded-lg shadow-xl p-6 md:p-8 max-w-md mx-auto border-0">
      {/* Step Indicator */}
      <div className="flex justify-between mb-8">
        {[1, 2, 3].map((step) => (
          <motion.div
            key={step}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
              formState.currentStep >= step
                ? 'bg-amber-500 text-white shadow-lg'
                : 'bg-slate-200 text-slate-600'
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {step}
          </motion.div>
        ))}
      </div>

      {/* Form Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={formState.currentStep}
          variants={stepVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* STEP 1: Car Details */}
          {formState.currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  What's your car?
                </label>
              </div>

              {/* Car Make */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Car Brand
                </label>
                <select
                  value={formState.carMake}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      carMake: e.target.value,
                      carModel: '',
                    }))
                  }
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                >
                  <option value="">Select car brand</option>
                  {Object.keys(carMakesAndModels).map((make) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </select>
              </div>

              {/* Car Model */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Model
                </label>
                <select
                  value={formState.carModel}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      carModel: e.target.value,
                    }))
                  }
                  disabled={!formState.carMake}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all disabled:bg-slate-100 disabled:cursor-not-allowed"
                >
                  <option value="">Select model</option>
                  {availableModels.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>

              {/* Car Year */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Year
                </label>
                <select
                  value={formState.carYear || ''}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      carYear: parseInt(e.target.value),
                    }))
                  }
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                >
                  <option value="">Select year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* STEP 2: Fuel Type */}
          {formState.currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-4">
                  Tell us more
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-4">
                  Fuel Type
                </label>
                <div className="space-y-3">
                  {fuelTypes.map((fuel) => (
                    <motion.label
                      key={fuel}
                      className="flex items-center gap-3 p-3 border border-slate-300 rounded-lg cursor-pointer hover:bg-amber-50 transition-all"
                      whileHover={{ x: 4 }}
                    >
                      <input
                        type="radio"
                        name="fuelType"
                        value={fuel}
                        checked={formState.fuelType === fuel}
                        onChange={(e) =>
                          setFormState((prev) => ({
                            ...prev,
                            fuelType: e.target.value,
                          }))
                        }
                        className="w-4 h-4 text-amber-500 cursor-pointer"
                      />
                      <span className="text-slate-700 font-medium">{fuel}</span>
                    </motion.label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Location */}
          {formState.currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Where are you located?
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  District in Tamil Nadu
                </label>
                <select
                  value={formState.city}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      city: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                >
                  <option value="">Select your district</option>
                  {tamilNaduDistricts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-8">
        {formState.currentStep > 1 && (
          <Button
            onClick={handleBack}
            variant="outline"
            className="flex-1 py-6"
          >
            Back
          </Button>
        )}
        <Button
          onClick={handleNext}
          disabled={!canProceed()}
          className={`flex-1 py-6 font-semibold transition-all ${
            canProceed()
              ? 'bg-amber-500 hover:bg-amber-600 text-white'
              : 'bg-slate-200 text-slate-500 cursor-not-allowed'
          }`}
        >
          {formState.currentStep === 3 ? (
            <>
              Get My Quote
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </>
          ) : (
            <>
              Next
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </>
          )}
        </Button>
      </div>
    </Card>
  );
}
