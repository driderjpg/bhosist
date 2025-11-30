import { useNavigate } from 'react-router-dom'

export default function DashboardPage() {
  const navigate = useNavigate()

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 100%)',
      color: 'white',
      fontFamily: '"SF Pro Display", -apple-system, sans-serif',
      padding: '40px'
    }}>
      
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '50px',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div>
          <h1 style={{
            fontSize: '52px',
            fontWeight: 900,
            margin: '0 0 10px 0',
            background: 'linear-gradient(90deg, #FFFFFF 0%, #FF6B35 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1.1'
          }}>
            BHOSist
          </h1>
          <p style={{
            fontSize: '22px',
            color: '#CCCCCC',
            margin: '0 0 20px 0',
            maxWidth: '500px',
            lineHeight: '1.4'
          }}>
            All-in-one study assistant for English & ICT at BHOS
          </p>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/choose')} style={{
              background: 'linear-gradient(45deg, #FF6B35, #FF8B35)',
              color: 'white',
              border: 'none',
              padding: '16px 35px',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: 600,
              boxShadow: '0 8px 25px rgba(255,107,53,0.3)',
              transition: 'all 0.3s ease'
            }}>
              Start Learning ›
            </button>
            <button style={{
              background: 'transparent',
              color: '#FF6B35',
              border: '2px solid #FF6B35',
              padding: '16px 35px',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: 600,
              transition: 'all 0.3s ease'
            }}>
              View Progress
            </button>
          </div>
        </div>
        
        {/* User Info */}
        <div style={{
          background: 'linear-gradient(135deg, #1A1A1A 0%, #222 100%)',
          border: '1px solid #333',
          borderRadius: '16px',
          padding: '25px',
          minWidth: '250px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: 'linear-gradient(45deg, #FF6B35, #FF8B35)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '18px'
            }}>
              JA
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '18px' }}>Jamal Abbasov</div>
              <div style={{ color: '#FF6B35', fontSize: '14px' }}>BHOS Student</div>
            </div>
          </div>
          <div style={{ fontSize: '14px', color: '#888' }}>
            Member since: Jan 2024
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '25px',
        marginBottom: '50px'
      }}>
        
        {/* Active Days */}
        <div style={{
          background: 'linear-gradient(135deg, #1A1A1A 0%, #222 100%)',
          border: '1px solid #333',
          borderRadius: '20px',
          padding: '30px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            position: 'absolute', 
            top: '-20px', 
            right: '-20px', 
            width: '100px', 
            height: '100px', 
            background: 'rgba(255,107,53,0.1)', 
            borderRadius: '50%' 
          }}></div>
          <div style={{ fontSize: '14px', color: '#FF6B35', fontWeight: 600, marginBottom: '15px' }}>
            ACTIVE DAYS
          </div>
          <div style={{ fontSize: '42px', fontWeight: 700, marginBottom: '10px' }}>47</div>
          <div style={{ fontSize: '14px', color: '#0F0', display: 'flex', alignItems: 'center', gap: '6px' }}>
            ↑ 5 days this week
          </div>
        </div>

        {/* Words Learned */}
        <div style={{
          background: 'linear-gradient(135deg, #1A1A1A 0%, #222 100%)',
          border: '1px solid #333',
          borderRadius: '20px',
          padding: '30px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            position: 'absolute', 
            top: '-20px', 
            right: '-20px', 
            width: '100px', 
            height: '100px', 
            background: 'rgba(255,107,53,0.1)', 
            borderRadius: '50%' 
          }}></div>
          <div style={{ fontSize: '14px', color: '#FF6B35', fontWeight: 600, marginBottom: '15px' }}>
            WORDS LEARNED
          </div>
          <div style={{ fontSize: '42px', fontWeight: 700, marginBottom: '10px' }}>1,247</div>
          <div style={{ fontSize: '14px', color: '#0F0', display: 'flex', alignItems: 'center', gap: '6px' }}>
            ↑ 127 new words today
          </div>
        </div>

        {/* Current Streak */}
        <div style={{
          background: 'linear-gradient(135deg, #1A1A1A 0%, #222 100%)',
          border: '1px solid #333',
          borderRadius: '20px',
          padding: '30px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            position: 'absolute', 
            top: '-20px', 
            right: '-20px', 
            width: '100px', 
            height: '100px', 
            background: 'rgba(255,107,53,0.1)', 
            borderRadius: '50%' 
          }}></div>
          <div style={{ fontSize: '14px', color: '#FF6B35', fontWeight: 600, marginBottom: '15px' }}>
            CURRENT STREAK
          </div>
          <div style={{ fontSize: '42px', fontWeight: 700, marginBottom: '10px' }}>12 days</div>
          <div style={{ fontSize: '14px', color: '#0F0', display: 'flex', alignItems: 'center', gap: '6px' }}>
            🔥 Keep going!
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '30px',
        alignItems: 'start'
      }}>
        
        {/* Left Column - Progress & Activities */}
        <div>
          {/* Progress Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '30px'
          }}>
            
            {/* English Progress */}
            <div style={{
              background: 'linear-gradient(135deg, #1A1A1A 0%, #222 100%)',
              border: '1px solid #333',
              borderRadius: '16px',
              padding: '25px'
            }}>
              <h3 style={{ color: '#FF6B35', marginBottom: '20px', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>📚</span> ENGLISH
              </h3>
              
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                  <span>Vocabulary</span>
                  <span style={{ color: '#FF6B35', fontWeight: 600 }}>75%</span>
                </div>
                <div style={{
                  height: '8px',
                  background: '#333',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  marginBottom: '15px'
                }}>
                  <div style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #FF6B35, #FF8B35)',
                    width: '75%'
                  }}></div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                  <span>Grammar</span>
                  <span style={{ color: '#FF6B35', fontWeight: 600 }}>60%</span>
                </div>
                <div style={{
                  height: '8px',
                  background: '#333',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  marginBottom: '15px'
                }}>
                  <div style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #FF6B35, #FF8B35)',
                    width: '60%'
                  }}></div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                  <span>Reading</span>
                  <span style={{ color: '#FF6B35', fontWeight: 600 }}>45%</span>
                </div>
                <div style={{
                  height: '8px',
                  background: '#333',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #FF6B35, #FF8B35)',
                    width: '45%'
                  }}></div>
                </div>
              </div>

              <button onClick={() => navigate('/english')} style={{
                background: 'linear-gradient(45deg, #FF6B35, #FF8B35)',
                color: 'white',
                border: 'none',
                padding: '12px 20px',
                borderRadius: '10px',
                cursor: 'pointer',
                width: '100%',
                fontWeight: 600,
                fontSize: '14px'
              }}>
                Continue English
              </button>
            </div>

            {/* ICT Progress */}
            <div style={{
              background: 'linear-gradient(135deg, #1A1A1A 0%, #222 100%)',
              border: '1px solid #333',
              borderRadius: '16px',
              padding: '25px'
            }}>
              <h3 style={{ color: '#FF6B35', marginBottom: '20px', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>💻</span> ICT
              </h3>
              
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                  <span>Web Development</span>
                  <span style={{ color: '#FF6B35', fontWeight: 600 }}>45%</span>
                </div>
                <div style={{
                  height: '8px',
                  background: '#333',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  marginBottom: '15px'
                }}>
                  <div style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #FF6B35, #FF8B35)',
                    width: '45%'
                  }}></div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                  <span>Programming</span>
                  <span style={{ color: '#FF6B35', fontWeight: 600 }}>35%</span>
                </div>
                <div style={{
                  height: '8px',
                  background: '#333',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  marginBottom: '15px'
                }}>
                  <div style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #FF6B35, #FF8B35)',
                    width: '35%'
                  }}></div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                  <span>Networking</span>
                  <span style={{ color: '#FF6B35', fontWeight: 600 }}>25%</span>
                </div>
                <div style={{
                  height: '8px',
                  background: '#333',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #FF6B35, #FF8B35)',
                    width: '25%'
                  }}></div>
                </div>
              </div>

              <button onClick={() => navigate('/ict')} style={{
                background: 'transparent',
                color: '#FF6B35',
                border: '2px solid #FF6B35',
                padding: '12px 20px',
                borderRadius: '10px',
                cursor: 'pointer',
                width: '100%',
                fontWeight: 600,
                fontSize: '14px'
              }}>
                Continue ICT
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div style={{
            background: 'linear-gradient(135deg, #1A1A1A 0%, #222 100%)',
            border: '1px solid #333',
            borderRadius: '16px',
            padding: '25px'
          }}>
            <h3 style={{ color: '#FF6B35', marginBottom: '20px', fontSize: '18px' }}>
              📈 RECENT ACTIVITY
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: 'rgba(255,107,53,0.05)', borderRadius: '10px' }}>
                <div style={{ fontSize: '24px' }}>🎯</div>
                <div>
                  <div style={{ fontWeight: 600 }}>Completed Vocabulary Quiz</div>
                  <div style={{ fontSize: '12px', color: '#888' }}>Today, 14:30 - Score: 95%</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: 'rgba(255,107,53,0.05)', borderRadius: '10px' }}>
                <div style={{ fontSize: '24px' }}>📖</div>
                <div>
                  <div style={{ fontWeight: 600 }}>Read ICT Chapter 3</div>
                  <div style={{ fontSize: '12px', color: '#888' }}>Yesterday - 45 minutes</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: 'rgba(255,107,53,0.05)', borderRadius: '10px' }}>
                <div style={{ fontSize: '24px' }}>⚡</div>
                <div>
                  <div style={{ fontWeight: 600 }}>12-day streak achieved!</div>
                  <div style={{ fontSize: '12px', color: '#888' }}>2 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Quick Actions & Stats */}
        <div>
          {/* Quick Actions */}
          <div style={{
            background: 'linear-gradient(135deg, #1A1A1A 0%, #222 100%)',
            border: '1px solid #333',
            borderRadius: '16px',
            padding: '25px',
            marginBottom: '30px'
          }}>
            <h3 style={{ color: '#FF6B35', marginBottom: '20px', fontSize: '18px' }}>
              ⚡ QUICK ACTIONS
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button style={{
                background: 'rgba(255,107,53,0.1)',
                color: '#FF6B35',
                border: '1px solid rgba(255,107,53,0.3)',
                padding: '15px',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 600,
                textAlign: 'left',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>📝</span> Daily Vocabulary Test
              </button>

              <button style={{
                background: 'rgba(255,107,53,0.1)',
                color: '#FF6B35',
                border: '1px solid rgba(255,107,53,0.3)',
                padding: '15px',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 600,
                textAlign: 'left',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>🎯</span> Practice Grammar
              </button>

              <button style={{
                background: 'rgba(255,107,53,0.1)',
                color: '#FF6B35',
                border: '1px solid rgba(255,107,53,0.3)',
                padding: '15px',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 600,
                textAlign: 'left',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>💻</span> Coding Exercises
              </button>

              <button style={{
                background: 'rgba(255,107,53,0.1)',
                color: '#FF6B35',
                border: '1px solid rgba(255,107,53,0.3)',
                padding: '15px',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 600,
                textAlign: 'left',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>📊</span> View Analytics
              </button>
            </div>
          </div>

          {/* Weekly Goal */}
          <div style={{
            background: 'linear-gradient(135deg, #1A1A1A 0%, #222 100%)',
            border: '1px solid #333',
            borderRadius: '16px',
            padding: '25px'
          }}>
            <h3 style={{ color: '#FF6B35', marginBottom: '15px', fontSize: '18px' }}>
              🎯 WEEKLY GOAL
            </h3>
            
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ 
                width: '120px', 
                height: '120px', 
                margin: '0 auto 15px auto',
                background: 'conic-gradient(#FF6B35 70%, #333 0%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  width: '90px',
                  height: '90px',
                  background: '#1A1A1A',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}>
                  70%
                </div>
              </div>
              <div style={{ fontWeight: 600 }}>350/500 points</div>
              <div style={{ fontSize: '12px', color: '#888' }}>Complete 3 more lessons</div>
            </div>

            <button style={{
              background: 'linear-gradient(45deg, #FF6B35, #FF8B35)',
              color: 'white',
              border: 'none',
              padding: '12px',
              borderRadius: '10px',
              cursor: 'pointer',
              width: '100%',
              fontWeight: 600,
              fontSize: '14px'
            }}>
              Complete Goal
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
