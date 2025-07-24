import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const SpecificationTabs = () => {
  const [activeTab, setActiveTab] = useState('physical');

  const tabs = [
    { id: 'physical', label: 'Physical', icon: 'Box' },
    { id: 'performance', label: 'Performance', icon: 'Zap' },
    { id: 'power', label: 'Power & Energy', icon: 'Battery' },
    { id: 'capabilities', label: 'Capabilities', icon: 'Brain' }
  ];

  const specifications = {
    physical: {
      title: 'Physical Dimensions',
      data: [
        { label: 'Height', value: '1.8m', detail: '5\'11" humanoid scale', progress: 90 },
        { label: 'Weight', value: '85kg', detail: '187 lbs operational weight', progress: 85 },
        { label: 'Width (shoulders)', value: '65cm', detail: 'Human-proportioned frame', progress: 70 },
        { label: 'Depth', value: '40cm', detail: 'Streamlined profile', progress: 60 },
        { label: 'Payload Capacity', value: '25kg', detail: '55 lbs maximum load', progress: 75 },
        { label: 'Reach Envelope', value: '2.1m', detail: 'Full arm extension', progress: 95 }
      ],
      comparison: [
        { metric: 'Height vs Human Average', atlas: 180, human: 175, unit: 'cm' },
        { metric: 'Weight vs Human Average', atlas: 85, human: 70, unit: 'kg' },
        { metric: 'Payload vs Human', atlas: 25, human: 15, unit: 'kg' }
      ]
    },
    performance: {
      title: 'Performance Metrics',
      data: [
        { label: 'Walking Speed', value: '1.5 m/s', detail: 'Sustained walking pace', progress: 80 },
        { label: 'Running Speed', value: '3.2 m/s', detail: 'Maximum sprint velocity', progress: 65 },
        { label: 'Jump Height', value: '1.2m', detail: 'Vertical leap capability', progress: 90 },
        { label: 'Step Height', value: '45cm', detail: 'Obstacle traversal', progress: 85 },
        { label: 'Balance Recovery', value: '<0.3s', detail: 'Dynamic stabilization', progress: 95 },
        { label: 'Precision Accuracy', value: '±0.5mm', detail: 'Manipulation precision', progress: 98 }
      ],
      comparison: [
        { metric: 'Walking Speed vs Human', atlas: 1.5, human: 1.4, unit: 'm/s' },
        { metric: 'Jump Height vs Human', atlas: 120, human: 60, unit: 'cm' },
        { metric: 'Reaction Time vs Human', atlas: 0.1, human: 0.25, unit: 's' }
      ]
    },
    power: {
      title: 'Power & Energy Systems',
      data: [
        { label: 'Battery Life', value: '8 hours', detail: 'Continuous operation', progress: 75 },
        { label: 'Power Consumption', value: '3.5 kW', detail: 'Average operational load', progress: 70 },
        { label: 'Charging Time', value: '2 hours', detail: 'Fast charge capability', progress: 90 },
        { label: 'Standby Power', value: '50W', detail: 'Idle power consumption', progress: 95 },
        { label: 'Peak Power', value: '7.2 kW', detail: 'Maximum power output', progress: 85 },
        { label: 'Energy Density', value: '250 Wh/kg', detail: 'Battery energy density', progress: 80 }
      ],
      comparison: [
        { metric: 'Energy Efficiency vs EV', atlas: 250, ev: 200, unit: 'Wh/kg' },
        { metric: 'Charge Time vs EV', atlas: 2, ev: 8, unit: 'hours' },
        { metric: 'Power Density vs Industrial', atlas: 3500, industrial: 2000, unit: 'W' }
      ]
    },
    capabilities: {
      title: 'Operational Capabilities',
      data: [
        { label: 'Degrees of Freedom', value: '28 DOF', detail: 'Full body articulation', progress: 100 },
        { label: 'Vision Range', value: '360°', detail: 'Omnidirectional sensors', progress: 100 },
        { label: 'Operating Temperature', value: '-10°C to 50°C', detail: 'All-weather operation', progress: 85 },
        { label: 'Processing Power', value: '12 TOPS', detail: 'AI computation capability', progress: 95 },
        { label: 'Memory', value: '64GB RAM', detail: 'Real-time processing', progress: 90 },
        { label: 'Network Connectivity', value: '5G/WiFi 6', detail: 'High-speed communication', progress: 95 }
      ],
      comparison: [
        { metric: 'DOF vs Human Joints', atlas: 28, human: 26, unit: 'joints' },
        { metric: 'Processing vs Smartphone', atlas: 12, smartphone: 2, unit: 'TOPS' },
        { metric: 'Memory vs Laptop', atlas: 64, laptop: 16, unit: 'GB' }
      ]
    }
  };

  const TabButton = ({ tab, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
        isActive
          ? 'bg-primary-500 text-white shadow-lg'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      <ApperIcon name={tab.icon} className="w-4 h-4" />
      <span className="font-medium text-sm">{tab.label}</span>
    </button>
  );

  const ProgressBar = ({ value, className = '' }) => (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
      />
    </div>
  );

  const ComparisonChart = ({ data }) => (
    <div className="space-y-4">
      <h4 className="font-bold text-gray-900 mb-4">Performance Comparison</h4>
      {data.map((item, index) => (
        <div key={index} className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">{item.metric}</span>
            <span className="text-xs text-gray-500">{item.unit}</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-primary-600 font-medium">Atlas</span>
              <span className="text-sm font-bold text-primary-600">{item.atlas}</span>
            </div>
            <ProgressBar value={(item.atlas / Math.max(item.atlas, item.human || item.ev || item.industrial || item.smartphone || item.laptop)) * 100} />
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Comparison</span>
              <span className="text-sm text-gray-600">{item.human || item.ev || item.industrial || item.smartphone || item.laptop}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const currentSpec = specifications[activeTab];

  return (
<div className="p-4 sm:p-6 lg:p-8">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 lg:mb-8 bg-gray-50 p-2 rounded-xl overflow-x-auto">
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            tab={tab}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid lg:grid-cols-2 gap-6 lg:gap-8"
      >
        {/* Specifications Grid */}
        <div>
          <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6">{currentSpec.title}</h4>
          <div className="space-y-4 lg:space-y-6">
            {currentSpec.data.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-3 lg:p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 text-sm lg:text-base">{spec.label}</div>
                    <div className="text-xs lg:text-sm text-gray-600 break-words">{spec.detail}</div>
                  </div>
                  <div className="text-right ml-2">
                    <div className="text-lg lg:text-xl font-bold gradient-text">{spec.value}</div>
                  </div>
                </div>
                <ProgressBar value={spec.progress} className="mt-3" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Charts */}
        <div>
          <ComparisonChart data={currentSpec.comparison} />
          
          {/* Additional Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 lg:mt-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-4 lg:p-6"
          >
            <h5 className="font-bold text-gray-900 mb-3 lg:mb-4 flex items-center text-sm lg:text-base">
              <ApperIcon name="Award" className="w-4 h-4 lg:w-5 lg:h-5 text-primary-500 mr-2" />
              Key Advantages
            </h5>
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold gradient-text">3x</div>
                <div className="text-xs text-gray-600">Faster than competitors</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold gradient-text">99.9%</div>
                <div className="text-xs text-gray-600">Reliability rating</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold gradient-text">50%</div>
                <div className="text-xs text-gray-600">Energy savings</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold gradient-text">24/7</div>
                <div className="text-xs text-gray-600">Continuous operation</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SpecificationTabs;