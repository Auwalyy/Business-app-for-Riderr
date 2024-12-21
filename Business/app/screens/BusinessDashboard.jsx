import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Svg, { Path, LinearGradient, Stop, Defs } from 'react-native-svg';

const BusinessDashboard = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#f8fafb', paddingVertical: 4 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#f8fafb',
          padding: 16,
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            color: '#0e141b',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Dashboard
        </Text>
      </View>

      {/* Performance Section */}
      <ScrollView>
        <Text
          style={{
            color: '#0e141b',
            fontSize: 22,
            fontWeight: 'bold',
            marginHorizontal: 16,
            marginTop: 20,
            marginBottom: 12,
          }}
        >
          Performance
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 16,
            paddingHorizontal: 16,
            paddingBottom: 24,
          }}
        >
          {/* Deliveries */}
          <View style={{ flex: 1, minWidth: 180, gap: 8 }}>
            <Text style={{ color: '#0e141b', fontSize: 16, fontWeight: '500' }}>Deliveries</Text>
            <Text style={{ color: '#0e141b', fontSize: 32, fontWeight: 'bold' }}>4,000</Text>
            <View style={{ flexDirection: 'row', gap: 4 }}>
              <Text style={{ color: '#4f7396', fontSize: 14 }}>1 month</Text>
              <Text style={{ color: '#078838', fontSize: 14, fontWeight: '500' }}>+5%</Text>
            </View>
            <View style={{ minHeight: 180, paddingVertical: 16 }}>
              <Svg width="100%" height="148" viewBox="-3 0 478 150" fill="none">
                <Defs>
                  <LinearGradient id="grad" x1="236" y1="1" x2="236" y2="149">
                    <Stop offset="0" stopColor="#e8edf3" />
                    <Stop offset="1" stopColor="#e8edf3" stopOpacity="0" />
                  </LinearGradient>
                </Defs>
                <Path
                  d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                  fill="url(#grad)"
                />
                <Path
                  d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                  stroke="#4f7396"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </Svg>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={{ color: '#4f7396', fontSize: 13, fontWeight: 'bold' }}>John</Text>
                <Text style={{ color: '#4f7396', fontSize: 13, fontWeight: 'bold' }}>David</Text>
                {/* Add more names here */}
              </View>
            </View>
          </View>
          {/* Add similar blocks for Ratings and Average Delivery Time */}
        </View>
      </ScrollView>

      {/* Footer Navigation */}
      <View
        style={{
          flexDirection: 'row',
          borderTopWidth: 1,
          borderTopColor: '#e8edf3',
          backgroundColor: '#f8fafb',
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}
      >
        <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
          <Svg width="24" height="24" viewBox="0 0 256 256">
            <Path
              d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"
              fill="#0e141b"
            />
          </Svg>
          <Text style={{ color: '#0e141b', fontSize: 12, fontWeight: '500' }}>Home</Text>
        </TouchableOpacity>
        {/* Add other footer navigation buttons here */}
      </View>
    </View>
  );
};

export default BusinessDashboard;
